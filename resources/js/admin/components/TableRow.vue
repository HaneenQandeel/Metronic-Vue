<template>
    <tr data-row="0" class="kt-datatable__row" style="left: 0px;">
        <td v-for="(field,index) in fields" :key="field.name" class="kt-datatable__cell">
            <span v-if="field.asHtml" style="width:70px;" v-html="resource[field.name]"></span>
            <span v-else style="width: 141px;"> {{  resource[field.name] }}</span>
        </td>
    
        <td class="kt-datatable__cell">
            <span style="overflow: visible; position: relative; width: 110px;">
            <a class="btn btn-sm btn-clean btn-icon btn-icon-md">
                <i class="la la-info-circle" @click="show(resource)"></i></a></span>
            <button class="btn btn-sm btn-clean btn-icon btn-icon-md" @click="deleteData(resource)"><i class="la la-trash"></i></button>   
            <v-dialog/>
        </td>
        
    </tr>
    
</template>

<script>
export default{
    props:{
        fields: {
            required: true,
        },
        resource:{
            required: true
        }
    },
    methods:{
        show (resource) {
            axios.get('https://reqres.in/api/users/'+ resource.id).then(response => {
                let dataInfo = response.data
                this.$modal.show('dialog', {
                title: 'Descriptions',
                text: '<b>Email : </b>' + ' ' + dataInfo.data.email + '</br>' + '<b> First Name :</b>' + ' ' + dataInfo.data.first_name
                    + ' </br>'  + '<b>Company :</b>'+ ' ' + dataInfo.ad.company + '</br>' + '<b>Info :</b>' + ' ' + dataInfo.ad.text,
                buttons: [
                    {
                    title: 'Close'
                    }
                ]
            });
            }).catch(function (error) {
                console.log(error);
             });

        },
        deleteData(resource) {
            swal("Are you sure you want to delete this?", {
                buttons: ["No", "Yes"],
            });
            axios.delete('https://reqres.in/api/users/' +resource.id)
            .then(response => {
                this.resource.splice(this.resource,1);
                
            });
        }
    }
}
</script>

