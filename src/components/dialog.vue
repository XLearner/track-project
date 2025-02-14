<template>
    <div class="dialog" v-if="ifShow">
        <div class="shadow"></div>
        <div class="box">
            <slot></slot>
            <div class="btn-box">
                <button class="close btn" @click="close">关闭</button>
                <button class="submit btn" @click="submit">预报</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['submit']);

const ifShow = ref(false);

const show = () => {
    ifShow.value = true;
}

const close = () => {
    ifShow.value = false;
}

const submit = () => {
    emit('submit')
}

defineExpose({ show, close });
</script>

<style scoped>
.dialog {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
}

.dialog .shadow {
    background: rgba(0, 0, 0, .5);
    position: absolute;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.dialog .box {
    background: #fff;
    width: 80%;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 10%;
    z-index: 10;
}

button {
    border: 0;

}

.btn-box {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 14px 10px;
}

.btn-box .btn {
    padding: 8px 20px;
    box-shadow: 0 2px 8px #aaa;
    border-radius: 3px;
}

.btn.submit {
    background: #5496a5;
    color: #fff;
}
</style>