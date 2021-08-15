AFRAME.registerComponent('comic-posters',{
    init:function(){
        this.comicsContainer = this.el
        this.createCards()
    },
    createCards:function(){
        const thumbnailsRef = [
            {
                id:'aladdin',
                title:'Aladdin',
                url:'./images/aladdin.png'
            },
            {
                id:'junglebook',
                title:'Junglr Book',
                url:'./images/jungle.png'
            },
            {
                id:'lionking',
                title:'The Lion King',
                url:'./images/lionking.jpg'
            },
            {
                id:'tomandjerry',
                title:'Tom and Jerry',
                url:'./images/tomandjerry.jpg'
            }
        ]

        let previousXPosition = -75

        for(var i of thumbnailsRef){
            const posX = previousXPosition+30;
            const posY = 12;
            const posZ = -20;
            const pos = {x:posX,y:posY,z:posZ}
            previousXPosition = posX
            const borderEl = this.createBorder(pos,i.id)
            const thumbnail = this.createThumbnail(i)
            borderEl.appendChild(thumbnail)
            this.comicsContainer.appendChild(borderEl)
        }
    },

    createBorder:function(pos,id){
        const entityEl = document.createElement('a-entity')
        entityEl.setAttribute('id',id)
        entityEl.setAttribute('position',pos)
        entityEl.setAttribute('visible',true)
        entityEl.setAttribute('geometry',{
            primitive:'box',
            width:22,
            height:36
        })
        entityEl.setAttribute('material',{
            color:'white',
            opacity:1
        })
        return entityEl 
    },

    createThumbnail:function(item){
        const entityEl = document.createElement('a-entity')
        entityEl.setAttribute('visible',true)
        entityEl.setAttribute('geometry',{
            primitive:'plane',
            width:20,
            height:28
        })
        entityEl.setAttribute('material',{
            src:item.url
        })
        entityEl.setAttribute('position',{y:3,z:0.6})
        return entityEl
    },
})