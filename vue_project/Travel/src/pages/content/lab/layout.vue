<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu  mode="horizontal" theme="dark" active-name="1">
          <!--div class="layout-logo"></div-->
          <div class="layout-nav">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-paper"></Icon>仪器管理
              </template>
              <Menu-Item name="1-1">仪器清单</Menu-Item>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-paper"></Icon>仪器校准
              </template>
              <Menu-Item name="2-1">校准计划</Menu-Item>
              <Menu-Item name="2-2">校准记录</Menu-Item>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-paper"></Icon>仪器维护
              </template>
              <!--<Menu-Group title="国际专家">-->
              <Menu-Item name="3-1">维护计划</Menu-Item>
              <Menu-Item name="3-2">维护记录</Menu-Item>
              <!--</Menu-Group>-->
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-paper"></Icon>仪器维修
              </template>
              <Menu-Item name="4-1">保修清单</Menu-Item>
              <Menu-Item name="4-2">待修清单</Menu-Item>
              <Menu-Item name="4-3">维修记录</Menu-Item>
            </Submenu>
            <Submenu name="5">
              <template slot="title">
                <Icon type="ios-paper"></Icon>仪器借用
              </template>
              <Menu-Item name="5-1">借用清单</Menu-Item>
              <Menu-Item name="5-2">借用记录</Menu-Item>
            </Submenu>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <div>
          <Input search enter-button placeholder="请输入搜索关键词" />
        </div>
        <!--Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb-->
        <Card>
          <div style="height: auto;">
            <Table border ref="selection" :columns="columns4" :data="data1"></Table>

            <Button style="margin-top: 20px" @click="handleSelectAll(true)">全选</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button style="margin-top: 20px" @click="handleSelectAll(false)">取消全选</Button>

          </div>
        </Card>
      </Content>
      <Footer class="layout-footer-center">2019-2020 &copy; 实验室管理</Footer>
    </Layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        columns4: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    },
    methods: {
      handleSelectAll (status) {
        this.$refs.selection.selectAll(status);
      }
    }
  }
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    position: center;
    text-align:center;
    width: 1000px;
    margin: 0 auto;
    /*margin-left: 20px;*/
    /*padding-left: 200px;*/
    align: center
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
