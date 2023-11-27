
const getproducts = () => {
    const data = localStorage.getItem('product')
    if (data) {
        return JSON.parse(data)
    }
    return []
}
export default getproducts
