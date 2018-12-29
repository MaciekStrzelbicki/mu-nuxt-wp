import axios from "axios";
import config from "@/api/config";

export default {
  baseUrl: config.baseUrl,
  altUrl: config.altUrl,
  getPage(slug) {
    return new Promise((resolve, reject) => {
      axios.defaults.baseURL = this.baseUrl;
      axios.get(`pages?slug=${slug}`).then(response => {
        const data = [...response.data][0];
        if (response.status === 200 && response.data.length > 0) {
          const filtered = {
            content: data.content.rendered,
            author: data.author,
            date: data.date,
            date_gmt: data.date_gmt,
            excerpt: data.excerpt.rendered,
            featured_media: data.featured_media,
            guid: data.guid.rendered,
            link: data.link,
            slug: data.slug,
            title: data.title.rendered
          };
          resolve(filtered);
        } else {
          reject(response);
        }
      });
    });
  },
  getPost(slug) {
    return new Promise((resolve, reject) => {
      axios.defaults.baseURL = this.baseUrl;
      axios.get(`posts?slug=${slug}`).then(response => {
        const data = [...response.data][0];
        if (response.status === 200 && response.data.length > 0) {
          const filtered = {
            content: data.content.rendered,
            author: data.author,
            date: data.date,
            date_gmt: data.date_gmt,
            excerpt: data.excerpt.rendered,
            featured_media: data.featured_media,
            guid: data.guid.rendered,
            link: data.link,
            slug: data.slug,
            title: data.title.rendered
          };
          resolve(filtered);
        } else {
          reject(response);
        }
      });
    });
  },
  getPosts(query) {
    console.log("Request posts");
    return new Promise((resolve, reject) => {
      axios.defaults.baseURL = this.baseUrl;
      axios.get(`posts?_embed&per_page=100&${query}`).then(response => {
        const data = [...response.data];
        console.log('data w getPosts(): ', data);
        if (response.status === 200 && response.data.length > 0) {
          const filtered = {
            total: response.headers["x-wp-total"],
            totalPages: response.headers["x-wp-totalpages"],
            data: data.map(item => ({
              id: item.id,
              title: item.title.rendered,
              excerpt: item.excerpt.rendered,
              content: item.content.rendered,
              slug: item.slug,
              featured_media: item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0].source_url : false, 
              // category_nicename: item.pure_taxonomies.categories[0].category_nicename,
              category_id: item.pure_taxonomies.categories[0].cat_ID,
              // category_slug: item.pure_taxonomies.categories[0].category_slug,
              categories: item.pure_taxonomies.categories,
              tags: item.pure_taxonomies.tags,
              promowany: item.promowany && item.promowany != 'Niepromowany' ? item.promowany[0] : false,
              date: item.date.split('T')[0].split('-')[2] + '-' + item.date.split('T')[0].split('-')[1] + '-' + item.date.split('T')[0].split('-')[0],
              author: item._embedded.author[0],
              tags: item._embedded['wp:term'][1]
            }))
          };
          // console.log('w getPosts() filtered: ', filtered)
          resolve(filtered);
        } else {
          reject(response);
        }
      });
    });
  },
  getCategory(slug) {
    return new Promise((resolve, reject) => {
      axios.defaults.baseURL = this.baseUrl;
      return axios
        .get(`categories?slug=${slug}`)
        .then(response => {
          const data = [...response.data][0];
          if (response.status === 200) {
            return {
              id: data.id,
              name: data.name,
              slug: data.slug
            };
          }
        })
        .then(category => {
          return axios
            .get(`posts?categories=${category.id}`)
            .then(response => {
              const data = [...response.data];
              if (response.status === 200) {
                category.posts = data.map(item => ({
                  id: item.id,
                  title: item.title.rendered,
                  content: item.content.rendered,
                  excerpt: item.excerpt.rendered,
                  slug: item.slug
                }));
                resolve(category);
              } else {
                reject(response);
              }
            });
        });
    });
  },
  getCategories(slug) {
    return new Promise((resolve, reject) => {
      axios.defaults.baseURL = this.baseUrl;
      return axios.get(`categories`).then(response => {
        console.log('categories: ', response )
        const data = [...response.data];
        if (response.status === 200 && response.data.length > 0) {
          resolve(data);
        }
      });
    });
  },
  getTweets() {
    return new Promise((resolve, reject) => {
      axios.defaults.baseURL = this.altUrl;
      return axios.get(`?rest_route=/utf/utf_by_name/miastoursynow/2/no/`).then(response => {
        // const data = [...response];
        // if (response.status === 200 && response.length > 0) {
          console.log('tweets:', response.data)
          resolve(response.data);
        // }
      });
    });
  }
  // getTweets() {
  //   return new Promise((resolve, reject) => {
  //     return axios.get(`//miastoursynow.pl/wp/get_tweets.php`).then(response => {
  //       // const data = [...response];
  //       // if (response.status === 200 && response.length > 0) {
  //         console.log('tweets:', response)
  //         resolve(response);
  //       // }
  //     });
  //   });
  // }


  
};
