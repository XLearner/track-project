<template>
    <Dialog ref="dialogRef">
        <div class="tag-box">
            <div class="tag on">基本</div>
            <div class="tag">明细</div>
            <div class="tag">备注</div>
        </div>
        <div class="content">
            <div class="list noicon">
                <div class="stit">运费</div>
                <div class="txt">{{ current.freight.toFixed(2) }} RMB</div>
            </div>
            <div class="list noicon">
                <div class="stit">燃油费</div>
                <div class="txt">{{ current.oil.toFixed(2) }} RMB</div>
            </div>
            <div class="list noicon">
                <div class="stit">附加费</div>
                <div class="txt">{{ current.adCharge.toFixed(2) }} RMB</div>
            </div>
            <div class="list noicon">
                <div class="stit">总费用</div>
                <div class="txt">{{ (current.price * current.weight).toFixed(2) }} RMB</div>
            </div>
            <div class="list noicon">
                <div class="stit">单价/kg</div>
                <div class="txt">{{ current.price.toFixed(2) }} RMB</div>
            </div>
            <div class="list noicon">
                <div class="stit">渠道名</div>
                <div class="txt">{{ current.tit }}</div>
            </div>
            <div class="list noicon">
                <div class="stit">材积除数</div>
                <div class="txt">5000</div>
            </div>
            <div class="occupy" style="height: 80px;"></div>
        </div>
    </Dialog>
</template>

<script setup>
import Dialog from '@/components/dialog.vue';
import { onMounted, ref } from 'vue';

const dialogRef = ref(null);

const current = ref({})

const show = (row) => {
    current.value = row;
    dialogRef.value.show();
}

defineExpose({ show })
</script>

<style scoped>
.tag-box {
    display: flex;
    justify-content: space-between;
}

.tag {
    width: 33.33%;
    text-align: center;
    padding: 15px 0;
    border-bottom: 1px solid #dfdfdf;
}

.tag.on {
    border-color: #5496a5;
    border-width: 3px;
}

.box .content {
    height: 430px;
    overflow: auto;
}

.content .txt {
    color: #888;
}

.list {
    padding: 14px 10px;
    border-bottom: 1px solid #ccc;
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
}

.list::after {
    content: '';
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 30px;
    background: url('../assets/arrow_r.svg') no-repeat;
    background-size: 80% 80%;
}

.list.noicon::after {
    content: none;
}

.list .stit {
    height: 20px;
}
</style>