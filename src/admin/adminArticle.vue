<template lang="html">
  <div>
    <div class="admin-container">
      <mavon-editor class="set" v-model="value" @imgAdd="imgAdd" @imgDel="imgDel" @change="getContent"
                    ref="medit"></mavon-editor>
      <div class="footer">
        <el-popover
          ref="popover5"
          placement="top"
          width="160"
          v-model="visible2">
          <p>确定提交吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
            <el-button type="primary" size="mini" @click="subArticle">确定</el-button>
          </div>
        </el-popover>
        <el-button v-popover:popover5 class="submit">发布</el-button>
        <div class="left">
          <el-button @click="dialogTableVisible = true">填写信息</el-button>
          <el-button @click="dialogTableVisible2 = true">添加文章分类</el-button>
        </div>
      </div>
    </div>
    <el-dialog title="文章信息" :visible.sync="dialogTableVisible">
      <el-form :model="form">
        <el-form-item label="文章标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="文章分类" :label-width="formLabelWidth">
          <el-select v-model="form.tag" placeholder="请选择活动区域">
            <el-option :key="item.id" :label="item.name" :value="item.id" v-for="item in tags"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章描述" :label-width="formLabelWidth">
          <el-input v-model="form.describtion" auto-complete="off"></el-input>
        </el-form-item>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="文章分类" :visible.sync="dialogTableVisible2" id="tags">
      <el-tag
        :key="tag.name"
        v-for="tag in tags"
        :closable="true"
        :close-transition="false"
        @close="handleClose(tag)"
      >
        {{tag.name}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="mini"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增分类</el-button>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogTableVisible2 = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  export default{
    data(){
      return {
        value: '',
        tags: [],
        content: '',
        visible2: false,
        dialogTableVisible: false,
        dialogTableVisible2: false,
        inputValue: '',
        inputVisible: false,
        form: {
          title: '',
          tag: '',
          describtion: '',
        },
        formLabelWidth: '120px',
        img_file: {}
      }
    },
    mounted () {
      this.getCategory()
    },
    methods: {
      getContent (value, render) {
        this.content = render
      },
      subArticle () {
        let article = {
          title: this.form.title,
          content: this.content,
          categoryId: this.form.tag,
          contentAbstract: this.form.describtion,
          image: '',
          authorId: 1
        }

        for (let i in this.img_file) {
            article.image=i.value;
            break;
        }

        console.log(this.img_file);
        console.log(article.image);
        if (!this.form.title) {
          this.$message.error('无标题')
        } else if (!this.content) {
          this.$message.error('无内容')
        } else {


          this.$api.post('/article', article, s => {
            this.$message({
              type: 'success',
              message: '文章已发布'
            })
            this.visible2 = false

          }, f => {
            this.$message.error('文章发布失败')
          })
        }
      },
      getCategory () {
        this.$api.get('/category', null, r => {
          this.tags = r;
        })

      },
      handleClose(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1)
        this.$api.delete('/category/' + tag.id, null, r => {
          this.$message({
            type: 'success',
            message: '标签已删除'
          })
        }, f => {
          type: 'error',
            this.$message.error('删除失败')
        })


      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          let category = {
            name: inputValue
          }
          this.$api.post('/category', category, r => {
            this.$message({
              type: 'success',
              message: '标签已添加'
            })
            this.tags.push({name: inputValue});
          }, f => {
            this.$message.error('添加失败')
          })

        }
        this.inputVisible = false;
        this.inputValue = '';
      },

      //批量上传
      imgUpload(){
        let formdata = new FormData();
        for (var _img in this.img_file) {
          formdata.append('file', this.img_file[_img]);
          this.$api.upload('/up', formdata, s => {
            this.$refs.medit.$img2Url(pos, s.imgPath);
            this.$refs.medit.$imgAddByUrl(pos.s.imgPath);
          }, f => {

          })
        }
      },

      //单文件上传
      imgAdd(pos, $file){
        let formdata = new FormData();
        formdata.append('file', $file);
        this.$api.upload('/up', formdata, s => {
          this.$refs.medit.$img2Url(pos, s.imgPath);
          console.log("111")
          this.$refs.medit.$imgUpdateByUrl(pos.s.imgPath);
          console.log("222")
        }, f => {

        })
      },


      imgDel(pos){
        delete this.img_file[pos];
      }
    }
  }
</script>

<style lang="css">
  #tags .el-tag + .el-tag {
    margin-left: 10px;
  }

  #tags .button-new-tag, .input-new-tag {
    margin-left: 10px;
    height: 24px;
    line-height: 22px;
    padding-top: 0;
    padding-bottom: 0;
  }

  #tags .input-new-tag {
    width: 78px;
    margin-left: 10px;
    vertical-align: bottom
  }

  .footer {
    overflow: hidden;
    margin: 0 auto;
    padding-top: 20px;
  }

  .row-bg {
    /*background-color: #f9fafc;*/
    background-color: #99a9bf;
    width: 100%;
    height: 837px;
    border-radius: 2px;
  }

  .admin-container {
    flex: 1;
    overflow-y: scroll;
    padding: 20px;
  }

  .set {
    height: 680px;
    /*overflow: scroll;*/
  }

  .submit {
    float: right;
  }

  .left {
    float: left;
  }
</style>
