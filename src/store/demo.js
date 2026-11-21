import Vue from 'vue'
import { products, initialOrders, initialLogs } from 'src/data/mock'

const state = Vue.observable({
  products: products.map(item => ({ ...item })),
  orders: initialOrders.map(item => ({ ...item })),
  logs: initialLogs.map(item => ({ ...item })),
  cart: [],
  temperature: 4.2,
  cabinetOnline: true,
  coupons: 2,
  memberPoints: 280,
  notifications: ['新品上市：招牌雞排', '會員點數雙倍送'],
  slots: Array.from({ length: 28 }, (_, index) => ({
    id: `S${String(index + 1).padStart(2, '0')}`,
    productId: (index % 8) + 1,
    count: index % 9 === 0 ? 0 : (index % 5) + 2,
    capacity: 10,
    expires: `2026-11-${String(23 + (index % 5)).padStart(2, '0')}`
  }))
})
const api = {}
Object.keys(state).forEach(key => {
  Object.defineProperty(api, key, { enumerable: true, get: () => state[key], set: value => { state[key] = value } })
})
Object.defineProperties(api, {
  cartCount: { get: () => state.cart.reduce((sum, item) => sum + item.qty, 0) },
  cartTotal: { get: () => state.cart.reduce((sum, item) => sum + item.qty * item.price, 0) },
  lowStock: { get: () => state.products.filter(item => item.stock < 20) },
  slotStock: { get: () => state.slots.reduce((sum, slot) => sum + slot.count, 0) }
})
const methods = {

  addCart (product) {
    const existing = this.cart.find(item => item.id === product.id)
    if (existing) existing.qty += 1
    else this.cart.push({ ...product, qty: 1 })
  },
  changeQty (id, delta) {
    const item = this.cart.find(item => item.id === id)
    if (!item) return
    item.qty += delta
    if (item.qty <= 0) this.cart = this.cart.filter(entry => entry.id !== id)
  },
  addLog (type, message) {
    this.logs.unshift({ time: new Date().toLocaleTimeString('zh-TW', { hour12: false }), type, message })
  },
  checkout (payment, invoice) {
    if (!this.cart.length) return null
    const id = `A${111 + this.orders.length - 3}`
    const order = {
      id,
      items: this.cart.map(item => `${item.name}×${item.qty}`),
      total: this.cartTotal,
      status: '待製作',
      time: new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false }),
      channel: '自助點餐',
      payment,
      invoice
    }
    this.orders.unshift(order)
    this.cart.forEach(item => {
      const product = this.products.find(entry => entry.id === item.id)
      if (product) product.stock = Math.max(0, product.stock - item.qty)
    })
    this.cart = []
    this.addLog('訂單', `${id} 模擬付款完成，金額 NT$${order.total}`)
    return id
  },
  nextOrder (id) {
    const order = this.orders.find(item => item.id === id)
    if (!order) return
    const statuses = ['待製作', '製作中', '可取餐', '已取餐']
    const index = statuses.indexOf(order.status)
    if (index < statuses.length - 1) {
      order.status = statuses[index + 1]
      this.addLog('出餐', `${id} 更新為${order.status}`)
    }
  },
  refill (slotId) {
    const slot = this.slots.find(item => item.id === slotId)
    if (!slot) return
    slot.count = slot.capacity
    this.addLog('補貨', `${slotId} 模擬補貨至 ${slot.capacity} 籃`)
  },
  toggleCabinet () {
    this.cabinetOnline = !this.cabinetOnline
    this.addLog('設備', `理貨櫃模擬切換為${this.cabinetOnline ? '連線' : '離線'}`)
  }
}
Object.keys(methods).forEach(key => { api[key] = methods[key].bind(api) })
export function useDemoStore () { return api }
