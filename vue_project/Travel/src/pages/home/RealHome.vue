<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  font-size: 20px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.label-div {
  background-color: #515a6e;
  color: white;
  text-align: left;
  font-size: 20px;
}
.ivu-menu-item-group-title {
  font-size: 100px
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header ref="header">
        <Menu
          mode="horizontal"
          theme="dark"
          active-name="1"
        >
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            Item 1
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            Item 2
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            Item 3
            </MenuItem>
            <MenuItem name="4">
            <Icon type="ios-paper"></Icon>
            Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider
          hide-trigger
          :style="{background: '#fff'}"
        >
        <Scroll :height="contentHeight">
          <Menu
            active-name="1-1"
            theme="light"
            width="auto"
            @on-select="handleMenuSelect"
            :open-names="['reporting', 'Lab Data Report', 'dashboard']"
          >
          <MenuGroup title="menu group">
            
          </MenuGroup>
            <div
              class="label-div"
              style="padding-left: 20px"
            >Analyzer</div>
            <Submenu name="reporting">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Reporting
              </template>
              <MenuItem name="1-1">KPI/PI Report</MenuItem>
              <MenuItem name="1-2">Shift Handover</MenuItem>
              <MenuItem name="1-3">Batch Process Parameter Report</MenuItem>
              <MenuItem name="1-4">Message Report</MenuItem>
              <Submenu name="Lab Data Report">
                <template slot="title">
                  <!-- <Icon type="ios-navigate"></Icon> -->
                  Lab Data Report
                </template>
                <MenuItem name="1-5">Raw material</MenuItem>
                <MenuItem name="1-6">Process Indicator</MenuItem>
                <MenuItem name="1-7">Finish Goods</MenuItem>
                <MenuItem name="1-8">BWC</MenuItem>
              </Submenu>
            </Submenu>
            <Submenu name="dashboard">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Dashboard
              </template>
              <MenuItem name="1-9">SPC</MenuItem>
              <MenuItem name="1-10">Dot Graph</MenuItem>
              <MenuItem name="1-11">Benchmark</MenuItem>
            </Submenu>
            <template>
              <div
                class="label-div"
                style="padding-left: 20px"
              >Reporting</div>
            </template>
            <!-- <Submenu name="tracking"> -->
            <MenuItem name="2-1">Batch Parameter</MenuItem>
            <MenuItem name="2-2">Sampling Process</MenuItem>
            <MenuItem name="2-3">KPI/PI</MenuItem>
            <MenuItem name="2-4">GOPS/BPE</MenuItem>
            <!-- </Submenu> -->

            <template>
              <div
                class="label-div"
                style="padding-left: 20px"
              >Lab Operation</div>
            </template>
            <!-- <Submenu name="tracking"> -->
            <MenuItem name="3-1">Certification</MenuItem>
            <MenuItem name="3-2">Calibration</MenuItem>
            <MenuItem name="3-3">Reagent</MenuItem>
            <MenuItem name="3-4">SOP/OPL</MenuItem>
            <MenuItem name="3-5">Fabric</MenuItem>
            <MenuItem name="3-6">LOG</MenuItem>

            <template>
              <div
                class="label-div"
                style="padding-left: 20px"
              >System Configuration</div>
            </template>
            <!-- <Submenu name="tracking"> -->
            <MenuItem name="4-1">Physical Modeling</MenuItem>
            <MenuItem name="4-2">Process Modeling</MenuItem>
            <MenuItem name="4-3">Sampling</MenuItem>
            <MenuItem name="4-4">PTS</MenuItem>
            <MenuItem name="4-5">Data Acqustion</MenuItem>
            <MenuItem name="4-6">User</MenuItem>
          </Menu>
          </Scroll>
        </Sider>
        <Layout :style="{padding: '0 24px 24px', fontSize: '40px'}">
          <Content :style="{textAlign: 'center',padding: '24px', minHeight: '280px', background: '#fff'}">
            <component :is="show"></component>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import LeftNav from '@/pages/sider/LeftNav'
import Lab from '@/pages/content/lab/layout'
export default {
  components: {
    LeftNav,
    Lab
  },
  methods: {
    handleMenuSelect (name) {
      console.log(name);
      this.show = 'lab';
    }
  },
  data () {
    return {
      show: null,
      contentHeight: 900,
    }
  },
  mounted() {
    var h = document.documentElement.clientHeight | document.body.height;
    // this.contentHeight = h - this.$refs.header.offsetHeight;
    console.log(this.$refs.header)
  }
}
</script>
