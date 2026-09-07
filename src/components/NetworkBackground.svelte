<script lang="ts">
    import { onMount } from 'svelte';
    
    let canvas: HTMLCanvasElement;
    
    onMount(() => {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        const particles: Particle[] = [];
        const numParticles = Math.min(100, Math.floor(window.innerWidth / 15));
        
        const mouse = { x: null as number | null, y: null as number | null, radius: 150 };
        
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };
        
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        
        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);
        window.addEventListener('mouseout', handleMouseOut);
        
        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
            }
            
            update() {
                if (this.x > width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > height || this.y < 0) this.speedY = -this.speedY;
                
                // Interactive mouse repulsion
                if (mouse.x != null && mouse.y != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        const directionX = forceDirectionX * force * 2;
                        const directionY = forceDirectionY * force * 2;
                        
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }
                
                this.x += this.speedX;
                this.y += this.speedY;
            }
            
            draw() {
                if(!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(59, 130, 246, 0.5)'; // Tailwind blue-500
                ctx.fill();
            }
        }
        
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
        
        let animationFrameId: number;
        
        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            if(!ctx) return;
            ctx.clearRect(0, 0, width, height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 - distance/800})`; // Light blue network lines
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }
        
        animate();
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    });
</script>

<canvas 
    bind:this={canvas} 
    class="absolute top-0 left-0 w-full h-full z-0 bg-transparent pointer-events-none"
></canvas>
