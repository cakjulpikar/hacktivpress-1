<template lang="html">
  <div class="container">
    <table class="table is-striped">
      <thead>
        <th> Author </th>
        <th> Title </th>
      </thead>
      <tbody v-for="article in articles">
        <tr>
          <td> {{article.author.username}} </td>
          <td> {{article.title}} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticles: function () {
      var self = this
      axios.get('http://localhost:3000/api/articles')
      .then(function (articles) {
        self.articles = articles.data
      })
      .catch(function (err) {
        console.log(err)
      })
    }
  },
  created: function () {
    var self = this
    self.getArticles()
  }
}
</script>

<style lang="css">
</style>
