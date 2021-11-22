var Main = {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      open1() {
        this.$notify({
          title: '混响时间',
          message: '声源停止发声后，声压级减少60dB所需要时间即为混响时间，正比于房间的大小',
          offset: 200
        });
      },
      open2() {
        this.$notify({
          title: '混响衰减',
          message: '声源停止发声后，声压级减少幅度',
          offset: 200
        });
      },
      open3() {
        this.$notify({
          title: '混响发送',
          message: '混响效果与原始音频的音量比例',
          offset: 200
        });
      },
      open4() {
        this.$notify({
          title: '低通滤波器截止频率',
          message: '在低通滤波器中，所有高于截频频率的频率部分都将被抑制或截频。',
          offset: 200
        });
      },
      open5() {
        this.$notify({
          title: '低通滤波器共振',
          message: '“共振”加重信号中环绕中心频率的部分。',
          offset: 200
        });
      },
    }
  }
var Ctor = Vue.extend(Main)
new Ctor().$mount('#sider')



new Ctor().$mount('#usericon')
