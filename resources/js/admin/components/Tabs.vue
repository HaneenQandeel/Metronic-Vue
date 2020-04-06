<template>
    <div class="tabs-item m-portlet">
        <div class="m-portlet__head-caption m-portlet__head">
			<h3 class="m-portlet__head-text">
				Tabs</h3>
	   </div></br>
        <div class="content">
            <tabs>
                <tab title="Overview">
                    <p class="description">Don’t want your columns to simply stack 
                    in some grid tiers? Use a combination of different classes 
                    for each tier as needed.</p>
                </tab>
                <tab title="Features and advantages">
                  <table style="width: 100%; border:2px solid #eee;">
                    <tr>
                        <th>Color</th>
                        <td>Red</td>
                    </tr>
                    <tr>
                        <th>Size</th>
                        <td>Large</td>
                    </tr>
                  </table>
                </tab>
                <tab title="Evaluation(0)">
                    <div class="row evaluation">
                        <div class="col-md-6 right-side">
                            <form class="form-info">
                                <h5 class="eval">Send Evaluation</h5>
                                <div class="stars">
                                    <span class="checked">&#9734;</span>
                                    <span class="checked">&#9734;</span>
                                    <span class="checked">&#9734;</span>
                                    <span class="checked">&#9734;</span>
                                    <span class="checked">&#9734;</span>
                                    <span class="count">0</span>
                                    </div>
                                <textarea id="w3mission" rows="5" cols="60" /></br>
                                <button class="btn btn-sm btn-clean btn-icon btn-icon-md send-btn">Send Evaluation</button></br>
                                <div class="line"></div>
                                <button class="btn btn-sm btn-clean btn-icon btn-icon-md send-btn" style="margin:17px 194px;"><i class="la la-refresh"></i>Upload</button>

                            </form>
                        </div>
                        <div class="col-md-6 left-side">
                           <p style="float:left; font-size:60px; margin:-3px 22px; color:#669008;">0</p></br>
                           <div class="star">
                             <span class="checked">&#9734;</span>
                              <span class="checked">&#9734;</span>
                              <span class="checked">&#9734;</span>
                              <span class="checked">&#9734;</span>
                           </div>
                           <div class="stars-desc">
                                <ul>
                                    <li class="five-star stars-progress">
                                        <label for="star" style="margin-left: 24px;">5 Stars</label>
                                        <progress id="star" value="0" ></progress>
                                        <span>100%</span>
                                    </li>
                                    <li class="four-star stars-progress">
                                        <label for="star">4 Stars</label>
                                        <progress id="star" value="0" ></progress>
                                        <span>0</span>
                                    </li>
                                    <li class="three-star stars-progress">
                                        <label for="star">3 Stars</label>
                                        <progress id="star" value="0" ></progress>
                                        <span>0</span>
                                    </li>
                                     <li class="two-star stars-progress">
                                        <label for="star">2 Stars</label>
                                        <progress id="star" value="0" ></progress>
                                        <span>0</span>
                                    </li>
                                     <li class="one-star stars-progress">
                                        <label for="star">1 Stars</label>
                                        <progress id="star" value="0" ></progress>
                                        <span>0</span>
                                    </li>
                                
                                </ul>

                           </div>
                           
                        </div>
                    </div>
                </tab>

                <tab title="Comments">
                        <div class="col-md-6 right-side">
                            <form class="form-info">
                                <h5 class="eval">Send Comments</h5>
                                <div class="stars">
                                    <span class="checked">&#9734;</span>
                                    <span class="checked">&#9734;</span>
                                    <span class="checked">&#9734;</span>
                                    <span class="checked">&#9734;</span>
                                    <span class="checked">&#9734;</span>
                                    <span class="count">0</span>
                                    </div>
                                <textarea id="w3mission" rows="5" cols="60" /></br>
                                <button class="btn btn-sm btn-clean btn-icon btn-icon-md send-btn">Send Comments</button></br>
                                <div class="line"></div>
                                <button class="btn btn-sm btn-clean btn-icon btn-icon-md send-btn" style="margin:17px 194px;"><i class="la la-refresh"></i>Upload</button>

                            </form>
                        </div>
                </tab>
    </tabs>
                
                </div>
            
            </div>

</template>

<script>
import { Tabs, Tab } from "vue-slim-tabs";

export default {
    components: {
        Tabs,
        Tab,
    },
};
</script>

<style src="vue-slim-tabs/themes/default.css"></style>
<style>
.vue-tab[aria-selected="true"] {
    border-color: red;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    font-size: 15px;
    font-weight:600;
}
.table, th, td {
  border: 1px solid #eee;
  border-collapse: collapse;
}
td {
  padding: 10px;
  text-align: left;
  background-color:#fff;
}
th{
    width: 150px;
    text-align: center;
    background-color: #eee;
}
.checked{
  color:orange;
  font-size:30px;
  float:left;
  margin-top:5px;
}
.count{
    float: left;
    margin-top: 15px;
    font-size: 18px;
    color: #000;

}
button.send-btn{
    background-color:orange;
    color:#fff;
    float:left;
    margin: 20px 20px;
    font-size: 13px;
}
textarea#w3mission{
    border:1px solid #eee;
    background-color:#fff;
    border-radius:15px;
}
h3.m-portlet__head-text{
    float:left;
        margin: 20px -15px;
}
p.description{
    font-weight: 600;
}
.vue-tabpanel{
    margin-top:35px;
}
.vue-tab{
    font-size:15px;
}
.vue-tabs{
    margin:13px 58px;
}
.vue-tablist{
    margin-left: -15px;
}
h5.eval{
    float: left;
    margin: 18px 12px;
     font-weight: 600;
}

.line{
    border:1px solid #eee;
    margin-top: 69px;
}
.right-side{
    margin-bottom: 140px;
    border: 2px solid #eee;
    border-radius: 15px; -webkit-box-shadow: -1px -2px 5px 0px rgba(238,238,238,1);
-moz-box-shadow: -1px -2px 5px 0px rgba(238,238,238,1);
box-shadow: -1px -2px 5px 0px rgba(238,238,238,1);
}
.stars-desc{
    float: left;
    margin: 110px -75px;
}
progress{
    background-color:#F1F1F1;
    opacity: 0.5;
    width: 250px;

}
label{
    font-size:17px;
}
.star{
    float: left;
    margin: 50px -51px;
}
li.stars-progress{
    padding:5px;
}
</style>
