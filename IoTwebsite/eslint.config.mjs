import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // ปิดการแจ้งเตือนเรื่องชื่อ Component ต้องมี 2 คำ
    'vue/multi-word-component-names': 'off'

    // ถ้ามีกฎอื่นที่อยากปิดอีก ก็เพิ่มลงมาตรงนี้ได้เลย เช่น
    // 'no-console': 'off' (อนุญาตให้ใช้ console.log ได้)
  }
})
