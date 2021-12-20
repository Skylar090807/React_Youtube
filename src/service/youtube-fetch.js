class Youtube {
  constructor(key) {
    this.key = key
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
  }

  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=${this.key}`,
      this.requestOptions,
    )
    const result_1 = await response.json()
    return result_1.items
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${query}&type=video&key=AIzaSyBZgIkhBTeC1kfU-uGAhIyD0mrb-t6rji8&key=${this.key}`,
      this.requestOptions,
    )
    const result_1 = await response.json()
    return result_1.items.map((item) => ({ ...item, id: item.id.videoId }))
  }
}

export default Youtube
