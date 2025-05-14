

export default function AddProduct () {
    return (
      <form >
        <input type="text" name="name"  placeholder="Enter Product Name"/>
        <input  type="number" name="price" placeholder="Enter Price"/>
        <button type="submit">Submit</button>
      </form>
    );
}