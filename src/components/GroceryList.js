
export function GroceryList() {
    let buy = ['bread','mayonaise','sugar','coffee','gatorade','tender juicy hotdog','gulay','knor sinigang mix','patatas','saging','mantika','magic sarap']
    return (
        <div>
            {buy.map((x)=> {
                return <h4 key={x}>{x}</h4>
            })}
        </div>
    )
}