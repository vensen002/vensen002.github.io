import { g as defineComponent, G as GenericContainer, _ as _export_sfc, o as openBlock, l as createBlock, f as withCtx, a as createBaseVNode } from "./app-xhKhQ7Db.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CustomLayout",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { GenericContainer };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["GenericContainer"], null, {
    default: withCtx(() => _cache[0] || (_cache[0] = [
      createBaseVNode("section", { class: "page-404-wrapper" }, [
        createBaseVNode("div", { class: "content" }, [
          createBaseVNode("h1", null, "403"),
          createBaseVNode("p", null, "Oops! Page does not exist."),
          createBaseVNode("div", { class: "xicon-container" }, "Go Home")
        ])
      ], -1)
    ])),
    _: 1
  });
}
const CustomLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "CustomLayout.vue"]]);
export {
  CustomLayout as default
};
