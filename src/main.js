// import { createApp } from 'vue'
import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import { createPopper } from "@popperjs/core";
const app = createApp(App);
app.directive("toast", {
  mounted(el, binding) {
    // el.style.position = "relative";
    let tip = document.createElement("span");
    el.addEventListener("mouseover", function () {
      tip.style.display = "block";
      switch (binding.value.pos) {
        case "left":
          createPopper(el, tip, {
            placement: "left",
            // positionFixed: true
          });
          break;
        case "right":
          createPopper(el, tip, {
            placement: "right",
          });
          break;
        case "top":
          createPopper(el, tip, {
            placement: "top",
          });
          break;
        case "bottom":
          createPopper(el, tip, {
            placement: "bottom",
          });
          break;
      }
    });
    el.addEventListener("mouseout", function () {
      tip.style.display = "none";
    });
    tip.className = "toast";
    // 提示框样式
    let css = {
      display: "none",
      // position: "absolute",
      //   width: "100%",
      padding: "5px 10px",
      borderRadius: "4px",
      color: binding.value.color || "white",
      backgroundColor: binding.value.bgColor || "black",
      lineHeight: 1,
      textAlign: "center",
      zIndex: 9999,
      maxWidth: "100px",
      overflow: "hidden",
    };
    
    tip.textContent = binding.value.content;
    setCss(tip, css);
    el.appendChild(tip);
  },
});
// 给元素赋值样式
function setCss(obj, css) {
  for (const attr in css) {
    obj.style[attr] = css[attr];
  }
}
createApp(App).mount("#app");
app.mount("#app");
