<template>
    <form>
        <div class="datatime-picker">
            <VueCtkDateTimePicker :no-value-to-custom-elem="(true|false)" />
                <input type="text" />
                <button type="button">Label</button>
            </VueCtkDateTimePicker>
        
        </div>
        <div class="date-picker">
            <datepicker :format="customFormatter"></datepicker>
        </div>
        <div class="color-picker">
            <colorpicker :colors="colors" v-on:selected-color="setColorCode"></colorpicker>
        </div>
    </form>

</template>


<script>
import Datepicker from 'vuejs-datepicker';
import colorpicker from 'vuejs-colorpicker';

export default {
    components: { 
        datepicker,
        colorpicker
    },
    data() {
        return {
            color_code: null,
            colors: [
                {"hex" : "#FFFFFF"}, {"hex" : "#000000"}, {"hex" : "#FF00FF"}, {"hex" : "#FFFF00"}, 
                {"hex" : "#000FFF"}, {"hex" : "#F0F0F0"}, {"hex" : "#0F0F0F"}, {"hex" : "#00FF00"}
            ],
        }
    },
    methods: {
        setColorCode(color_code) {
            this.color_code = color_code;
        }
    }
    
}

</script>