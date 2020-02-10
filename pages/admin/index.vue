<template>
  <div>
    <h1>Posts analytics</h1>
    <AppAnalyticChart
      title="Views count"
      :labels="views.labels"
      :data="views.data"
    >
    </AppAnalyticChart>

    <AppAnalyticChart
      title="Comments count"
      :labels="comments.labels"
      :data="comments.data"
    >
    </AppAnalyticChart>
  </div>
</template>

<script>
import AppAnalyticChart from '@/components/admin/AnalyticChart'

export default {
  components: { AppAnalyticChart },

  layout: 'admin',

  middleware: ['admin-auth'],

  async asyncData({ store }) {
    const { views, comments } = await store.dispatch('post/getAnalytics')

    return { views, comments }
  }
}
</script>

<style></style>
