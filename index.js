import { FlatList,Text,View,StyleSheet,Image } from "react-native";
// export default function ProductList(props){}

const ProductItem=(props)=>{
    const item=props.item;
    //=> tên sp là item.name, giá là item.price
    return(
        
                <>
                <Text>Tên món : {item.name}</Text>
                <Text>Giá : {item.price} VNĐ</Text>
                <Image source={
                    {uri: 'https://picsum.photos/536/354'}
                    // require('../../../assets/icon.png')
                }
                style={style.productImage}
                />
                </>
    
    );

}
const ProductList = (props)=>{
    // const list=[
    //     {id:1,name :'Bún bò Huế',price : 50000},
    //     {id:2,name :'Bánh cuốn',price : 30000},
    //     {id:3,name :'Phở boà',price : 60000},
    // ];
    //khi data k được truyền vào thì mặc định là []
    const list = props.data||[];
    return(
        <FlatList
            data={list}
            // renderItem={({item})=> <ProductItem item={item}/>}
            renderItem={ProductItem}
            keyExtractor={(item)=> item.id}
        />
    );
    
};
export default ProductList;

const style=StyleSheet.create({
    productImage:{width:50,height:50}
});