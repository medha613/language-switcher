"use server"

export async function createProduct(formData) {

    const name= formData.get("name")
    const ProductQty = formData.get("price")
    console.log(name, ProductQty, "namee")
    
}

// export async function 
