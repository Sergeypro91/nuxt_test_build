<template>
  <el-table :data="posts" style="width: 100%">
    <el-table-column prop="title" label="Post name"></el-table-column>

    <el-table-column label="Date">
      <template slot-scope="{ row: { date } }">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{
          new Date(date).toLocaleString()
        }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="views" label="Post views">
      <template slot-scope="{ row: { views } }">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ views }}</span>
      </template>
    </el-table-column>

    <el-table-column label="Post comments">
      <template slot-scope="{ row: { comments } }">
        <i class="el-icon-chat-dot-round"></i>
        <span style="margin-left: 10px">{{ comments.length }}</span>
      </template>
    </el-table-column>

    <el-table-column label="Operations">
      <template slot-scope="{ row }">
        <el-button type="primary" @click="open(row._id)">Edit</el-button>
        <el-button type="danger" @click="remove(row._id)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  layout: 'admin',

  middleware: ['admin-auth'],

  head() {
    return {
      title: `Posts redact | ${process.env.appName}`
    }
  },

  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetchAdmin')

    return { posts }
  },
  methods: {
    open(id) {
      this.$router.push(`/admin/post/${id}`)
    },

    async remove(id) {
      try {
        await this.$confirm('You whant to delate Post?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        })

        await this.$store.dispatch('post/remove', id)
        this.posts = this.posts.filter(p => p._id !== id)

        this.$message.success('Post whas saccsesful delit!')
      } catch (e) {}
    }
  }
}
</script>

<style></style>
