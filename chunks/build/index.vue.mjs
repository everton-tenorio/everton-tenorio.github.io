import { resolveComponent, mergeProps, useSSRContext, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-solid-svg-icons';

const _sfc_main$3 = {
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FontAwesomeIcon = resolveComponent("FontAwesomeIcon");
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "w-full md:w-64 p-4 bg-gray-0 rounded-xl shadow-md" }, _attrs))}><img class="w-24 h-24 rounded-full mx-auto" src="https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1142629%2Fc5dca76a-98f6-4f9f-8d94-c8ee971c89e8.jpg" alt="Foto de Perfil"><h2 class="text-center mt-4 text-xl font-bold text-white font-[Ubuntu]">Everton Tenorio</h2><p class="text-center text-gray-600">DevOps | Software Enginner</p><div class="mt-4 text-sm text-gray-700 flex flex-col gap-2"><div class="flex items-center justify-between md:justify-start"><span class="flex items-center ml-5 md:ml-0 lg:ml-0 text-[1rem] md:text-[0.9rem]">`);
      _push(ssrRenderComponent(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-location-dot",
        class: "md:ml-6 mr-2 text-gray-500"
      }, null, _parent));
      _push(` Brasil </span><div class="flex items-center mr-2 md:gap-3 gap-8 md:ml-8"><a href="https://github.com/everton-tenorio" class="flex items-center">`);
      _push(ssrRenderComponent(_component_FontAwesomeIcon, {
        icon: "fa-brands fa-github",
        class: "text-gray-500 text-xl md:text-base bg-gray-200 md:bg-[transparent] p-2 md:p-0 rounded-full hover:bg-gray-300 md:hover:bg-transparent transition-colors"
      }, null, _parent));
      _push(`</a><a href="https://dev.to/evertontenorio" class="flex items-center">`);
      _push(ssrRenderComponent(_component_FontAwesomeIcon, {
        icon: "fa-brands fa-dev",
        class: "text-gray-500 text-xl md:text-base bg-gray-200 md:bg-transparent p-2 md:p-0 rounded-full hover:bg-gray-300 md:hover:bg-transparent transition-colors"
      }, null, _parent));
      _push(`</a><a href="https://dev.to/evertontenorio" class="flex items-center">`);
      _push(ssrRenderComponent(_component_FontAwesomeIcon, {
        icon: "fa-brands fa-linkedin",
        class: "text-gray-500 text-xl md:text-base bg-gray-200 md:bg-transparent p-2 md:p-0 rounded-full hover:bg-gray-300 md:hover:bg-transparent transition-colors"
      }, null, _parent));
      _push(`</a></div></div></div></aside>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _sfc_main$2 = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = ref([
      {
        name: "cty",
        description: "Conventional Commits + Python + CLI = cty",
        url: "https://github.com/everton-tenorio/cty"
      },
      {
        name: "twish",
        description: "Tweets in Shell: A CLI that uses shellcript + xurl to post, reply, and delete tweets",
        url: "https://github.com/everton-tenorio/twish"
      },
      {
        name: "svg-icons",
        description: "Roadmap.sh DevOps Project",
        url: "https://github.com/everton-tenorio/roadmapsh-devops-projects"
      }
    ]);
    ref(0);
    const currentProject = ref(projects.value[0]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FontAwesomeIcon = resolveComponent("FontAwesomeIcon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full font-[Ubuntu] mt-5 pb-12 lg:mb-7 lg:mt-0" }, _attrs))}><div class="relative lg:h-[1cover bg-center shado0,0,0,0.47)] lg:mx-[-20px] lg:mt-[-10px] lg:mb-2"><div id="particles-container" class="absolute top-0 left-0 w-full h-[100px] overflow-hidden z-[1]"></div><h3 class="text-white text-[1.5rem] text-left pt-5 z-[2] relative"><a${ssrRenderAttr("href", currentProject.value.url)}><span class="text-[#fdf8f893] text-xs rounded px-1.5 py-0.5 font-[Ubuntu]">`);
      _push(ssrRenderComponent(_component_FontAwesomeIcon, {
        icon: "fa-brands fa-github",
        class: "text-3xl text-white"
      }, null, _parent));
      _push(`</span> ${ssrInterpolate(currentProject.value.description)}</a></h3></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "DevtoPostsCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = ref([]);
    ref(false);
    ref(0);
    ref(0);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FontAwesomeIcon = resolveComponent("FontAwesomeIcon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-741936b4><div class="lg:mx-[-20px] lg:mt-[-10px] mt-5 mb-5" data-v-741936b4><span class="text-[gray] px-1.5 py-1 font-[Ubuntu]" data-v-741936b4>`);
      _push(ssrRenderComponent(_component_FontAwesomeIcon, {
        icon: "fa-brands fa-dev",
        class: "text-4xl text-white"
      }, null, _parent));
      _push(`</span><div class="mt-2 flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing" data-v-741936b4><!--[-->`);
      ssrRenderList(posts.value, (post, index) => {
        _push(`<div class="flex-shrink-0 w-64 md:w-70 h-45 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition snap-start cursor-pointer" data-v-741936b4><img${ssrRenderAttr("src", post.social_image)} alt="Imagem do Post" class="w-full h-28 object-cover" data-v-741936b4><div class="p-3" data-v-741936b4><h3 class="text-sm font-semibold line-clamp-2" data-v-741936b4>${ssrInterpolate(post.title)}</h3><p class="text-xs text-gray-500 mt-1" data-v-741936b4>${ssrInterpolate(post.readable_publish_date)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DevtoPostsCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DevtoPostsCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-741936b4"]]);

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto lg:mt-2 px-4 lg:px-8 lg:py-12" }, _attrs))}><div class="flex flex-col md:flex-row gap-6"><div class="lg:mt-8">`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div><div class="flex-1 lg:ml-10 lg:mr-0 lg:w-8">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(DevtoPostsCarousel, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
