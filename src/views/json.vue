<template>
    <Dialog ref="dialogRef" @submit="submit">
        <textarea name="json" class="area" v-model="current"></textarea>
        <div class="occupy" style="height: 100px;"></div>
    </Dialog>
</template>

<script setup>
import Dialog from '@/components/dialog.vue';
import { onMounted, ref } from 'vue';

const dialogRef = ref(null);

const emit = defineEmits(['submit']);

const current = ref({})

const show = (row) => {
    current.value = row;
    dialogRef.value.show();
}

const submit = () => {
    emit('submit', current.value)
    dialogRef.value.close()
}

defineExpose({ show })
</script>

<style scoped>
.area {
    width: 100%;
    height: 300px;
}
</style>