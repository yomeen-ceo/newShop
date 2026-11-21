export const products = [
  { id: 1, name: '招牌雞排', category: '雞排', price: 85, stock: 36, sold: 92, emoji: '🍗', minutes: 8 },
  { id: 2, name: '香酥雞塊', category: '雞肉', price: 70, stock: 28, sold: 78, emoji: '🍖', minutes: 6 },
  { id: 3, name: '黃金薯條', category: '點心', price: 45, stock: 48, sold: 66, emoji: '🍟', minutes: 5 },
  { id: 4, name: '甜不辣', category: '點心', price: 40, stock: 15, sold: 51, emoji: '🍢', minutes: 5 },
  { id: 5, name: '酥炸魷魚', category: '海鮮', price: 80, stock: 12, sold: 44, emoji: '🦑', minutes: 7 },
  { id: 6, name: '四季豆', category: '蔬菜', price: 40, stock: 22, sold: 39, emoji: '🥬', minutes: 4 },
  { id: 7, name: '杏鮑菇', category: '蔬菜', price: 50, stock: 18, sold: 37, emoji: '🍄', minutes: 5 },
  { id: 8, name: '米血糕', category: '點心', price: 35, stock: 9, sold: 35, emoji: '🍡', minutes: 4 }
]
export const initialOrders = [
  { id: 'A108', items: ['招牌雞排', '黃金薯條'], total: 130, status: '製作中', time: '14:18', channel: '自助點餐' },
  { id: 'A109', items: ['香酥雞塊'], total: 70, status: '待製作', time: '14:20', channel: '手機點餐' },
  { id: 'A110', items: ['酥炸魷魚', '甜不辣'], total: 120, status: '可取餐', time: '14:22', channel: '自助點餐' }
]
export const initialLogs = [
  { time: '14:22:05', type: '訂單', message: 'A110 已完成出餐通知' },
  { time: '14:20:16', type: '庫存', message: '甜不辣庫存低於安全值' },
  { time: '14:18:30', type: '設備', message: '理貨櫃溫度監控正常（模擬）' }
]
export const stores = [
  { name: '高雄示範店', revenue: 28650, orders: 186, status: '正常' },
  { name: '台南概念店', revenue: 21380, orders: 142, status: '展示' },
  { name: '屏東測試店', revenue: 17520, orders: 119, status: '展示' }
]
export const revenueTrend = [34, 47, 42, 62, 71, 66, 86]
