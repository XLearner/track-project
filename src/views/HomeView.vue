<script setup>
import { onMounted, ref } from 'vue';
import Header from '@/components/Header.vue'
import SearchBox from '@/components/SearchBox.vue'
import ContentBox from '@/components/ContentBox.vue'
import IconEmpty from '@/components/icons/IconEmpty.vue';
import Footer from '@/components/Footer.vue';
import { apiGetTrack } from '@/api/api';

const cargo = ref([]);

onMounted(() => {
  const url = new URL(window.location);
  const order_id = url.searchParams.get('order_id')

  getTrack(order_id);
})

function getTrack(id) {
  apiGetTrack(id).then(res => {
    if (res.code == 0 && res.data) {
      cargo.value = res.data.map(ele => {
        let history = [];
        try {
          // 兼容 history 为 JSON 字符串或已解析的数组
          const raw = typeof ele.history === 'string' ? JSON.parse(ele.history) : (ele.history || []);
          history = raw
            .sort((a, b) => {
              // 兼容 ISO 日期字符串和数字时间戳字符串
              const parseTime = (v) => isNaN(v) ? new Date(v).getTime() : new Date(Number(v)).getTime();
              return parseTime(a.updateTime) - parseTime(b.updateTime);
            })
            .map(ele => ({ ...ele, on: true }));
          if (history.length > 0) {
            history[history.length - 1].on = false;
          }
        } catch (e) {
          history = [];
        }

        return {
          ...ele,
          history: history,
          historyLen: history.length,
          lastState: history.length > 0 ? history[history.length - 1] : null
        }
      })
    }
  }).catch(err => {
    console.error('获取轨迹信息失败:', err);
  })
}
</script>

<template>
  <Header></Header>
  <!-- <main>
    <TheWelcome />
  </main> -->
  <SearchBox @search="getTrack"></SearchBox>

  <ContentBox v-model="cargo" v-if="cargo.length > 0"></ContentBox>
  <div v-else>
    <div class="container">
      <IconEmpty></IconEmpty>
      <p>数据为空，请重新输入运单号</p>
    </div>

  </div>
  <div class="space"></div>
  <Footer></Footer>
</template>


<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
  padding-top: 50px;
  border-top: 3px solid #45b787;
  font-size: 16px;

  svg {
    width: 200px;
    height: 200px;
  }

  p {
    padding-top: 10px;
    font-weight: 600;
  }
}

.space {
  height: 600px;
}

@media screen and (max-width: 968px) {
  .space {
    height: 200px;
  }
}
</style>