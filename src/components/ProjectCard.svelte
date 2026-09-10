<script lang="ts">
  import { ExternalLink, Github, Code2, BookOpen } from 'lucide-svelte';

  export let title: string;
  export let description: string;
  export let tags: string[];
  export let githubLink: string = "";
  export let demoLink: string = "";
  export let isMain: boolean = false;
  export let imageUrl: string = "";
  export let articleLink: string = "";
</script>

<div class="group relative flex flex-col justify-between border {isMain ? 'border-blue-200 shadow-md' : 'border-slate-200'} rounded-2xl p-6 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400 h-full overflow-hidden">
  
  {#if isMain}
    <div class="absolute top-0 right-0 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-bl-xl border-b border-l border-blue-200 z-20">
      Featured
    </div>
  {/if}

  <div class="z-10">
    {#if imageUrl}
       <div class="w-full h-48 mb-5 overflow-hidden rounded-xl border border-slate-100">
         <img src={imageUrl} alt={title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
       </div>
    {:else}
       <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5 border border-blue-100 group-hover:scale-110 transition-transform duration-300">
         <Code2 size={24} />
       </div>
    {/if}

    <h3 class="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{title}</h3>
    <p class="text-slate-600 mt-3 leading-relaxed">{description}</p>
    
    <div class="flex flex-wrap gap-2 mt-5">
      {#each tags as tag}
        <span class="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
          {tag}
        </span>
      {/each}
    </div>
  </div>

  <div class="mt-8 pt-4 border-t border-slate-100 flex items-center gap-4 z-10 flex-wrap">
    {#if articleLink}
      <a href={articleLink} class="flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
        <BookOpen size={16} /> Read Case Study
      </a>
    {/if}
    {#if githubLink}
      <a href={githubLink} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
        <Github size={18} /> Code
      </a>
    {/if}
    {#if demoLink}
      <a href={demoLink} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
        <ExternalLink size={18} /> Live Demo
      </a>
    {/if}
  </div>
</div>
