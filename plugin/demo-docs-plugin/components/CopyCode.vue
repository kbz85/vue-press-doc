<template>
    <div @click="copyToClipboard">
        复制代码
    </div>
</template>
<script lang='ts' setup>
const props = defineProps<{
    code: string
}>()

function copyToClipboard() {
    const bgColor = "#00ff00";

    const textarea = document.createElement("textarea");
    textarea.value = decodeURIComponent(props.code);
    textarea.style.background = bgColor;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    // 
    // 显示成功提示
    const successMessage = document.createElement("div");
    successMessage.textContent = "Text copied to clipboard!";
    successMessage.style.position = "fixed";
    successMessage.style.bottom = "15px";
    successMessage.style.right = "15px";
    successMessage.style.background = bgColor;
    successMessage.style.color = "white";
    successMessage.style.padding = "10px";
    document.body.appendChild(successMessage);

    // 3 秒后隐藏提示
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}
</script>
<style lang='less'></style>