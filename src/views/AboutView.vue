<template>
  <div class="about">
    <detailsLog ref="detailRef"></detailsLog>
    <JsonDialog ref="jsonRef" @submit="updateJson"></JsonDialog>
    <div class="head">
      <div class="list">
        <div class="stit" @click="showJson">物流方式</div>
        <div class="txt"><input type="text"></div>
      </div>
      <div class="list">
        <div class="stit">承运商</div>
        <div class="txt"></div>
      </div>
    </div>
    <div class="tit">高级选项仅针对某些API价格适用</div>
    <div class="mid">
      <div class="list">
        <div class="stit">重量：<input type="number" class="weigth" v-model="realWeight">KG</div>
      </div>
      <div class="list noicon">
        <div class="stit address"><input type="text"></div>
      </div>
    </div>
    <div class="tit">共找到{{ data.length }}条记录</div>
    <div class="foot-list">
      <div class="search">
      </div>
      <ul>
        <li v-for="item in data" class="list noicon" @click="showDetail(item)">
          <div class="stit">{{ item.tit }}</div>
          <div class="txt">
            <div class="price">{{ (item.price * realWeight || 0).toFixed(2) }} RMB</div>
            <div class="w">{{ (realWeight || 0).toFixed(3) }}KG * {{ item.price.toFixed(2) }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import detailsLog from './details.vue';
import JsonDialog from './json.vue';


const data = ref([
  {
    tit: '香港DHL-M价-不带电',
    price: 93.45,
    oil: 34,
    adCharge: 34,
    freight: 200,
  },
  {
    tit: '香港DHL-P价-不带电',
    price: 93.45,
    oil: 34,
    adCharge: 34,
    freight: 200,
  },
  {
    tit: '深圳UPS红单W价5500',
    price: 93.45,
    oil: 34,
    adCharge: 34,
    freight: 200,
  },
  {
    tit: '大陆UPS红单5800促销-免偏远/住宅/AHC',
    price: 93.45,
    oil: 34,
    adCharge: 34,
    freight: 200,
  },
  {
    tit: '广州UPS蓝单A价5000-免偏远住宅',
    price: 93.45,
    oil: 34,
    adCharge: 34,
    freight: 200,
  },
  {
    tit: '大陆UPS蓝单D价5000-免偏远/住宅/AHC',
    price: 93.45,
    oil: 34,
    adCharge: 34,
    freight: 200,
  },
]);
const detailRef = ref(null);
const jsonRef = ref(null);
const realWeight = ref(0);

onMounted(() => {
  sessionStorage.setItem('list', JSON.stringify(data.value))
})


const showDetail = (row) => {
  detailRef.value.show({
    ...row,
    weight: realWeight.value
  });
  // current.value = row;
}
const showJson = () => {
  jsonRef.value.show(JSON.stringify(data.value, null, 2))
}

const updateJson = (value) => {
  console.log(typeof JSON.parse(value));
  data.value = JSON.parse(value);
}

</script>

<style scoped>
.about {
  font-size: 18px;
}

input {
  border: 0;
  font-size: 1em;
}

input.weigth {
  width: 80px;
}

.list {
  padding: 14px 10px;
  border-bottom: 1px solid #ccc;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  font-size: 1em;
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
  line-height: 1.2;
  max-width: 70%;
}

.tit {
  background: #bbb;
  padding: 10px;
  font-size: 1em;
}

.txt {
  font-size: 1em;
}

.address>input {
  color: blue;
}

.foot-list .list .stit {
  font-weight: 600;
}

.foot-list .list .txt {
  font-size: 0.78em;
  line-height: 1.2;
}
</style>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
