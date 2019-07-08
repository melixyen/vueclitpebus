

<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div class="stop_station_id">Station ID : {{ stationid }}</div>
        <div class="busArea">
            <table>
                <tr v-for="bus in aryStops" v-bind:key="bus.RouteUID">
                    <td>{{ bus.RouteName.Zh_tw }}</td>
                    <td>{{ bus.DepartureStopNameZh }}</td>
                    <td>{{ bus.DestinationStopNameZh }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import ptx from '../lib/ptx.es.js';

let arySBS = ['TPE','NWT'];
let stCity = '';
let stRes = [];
let vueMain = false;
let tmpStationPosition = false;
var stationID = ''; 

function goReadStation(){
    tmpStationPosition = false;
    if(arySBS.length>0){
        stCity = arySBS.shift();
        getAllCityStation();
    }else{
        vueMain.updateStops(stRes);
    }
}

function getAllCityStation(){
        ptx.bus.getBusStation(stationID, stCity, {
            cbFn: function(data,e){
                if(e.status==ptx.statusCode.SUCCESS && data.length>0 && data[0].Stops.length>0){
                    var aryRouteUID = [];
                    var dataStops = data[0].Stops;
                    tmpStationPosition = data[0].StationPosition;
                    var ary = dataStops.map(function(c){
                        c.CityCode = stCity.city;
                        c.StationID = stCity.StationID;
                        c.StationTargetID = stCity.StationTargetID;
                        aryRouteUID.push(c.RouteUID);
                        return c;
                    });
                    //二次工作，取得 Bus Route Data 合併進去
                    if(aryRouteUID.length>0){
                        ptx.bus.getBusRoute(aryRouteUID, {cbFn: function(rData, re){
                            if(e.status==ptx.statusCode.SUCCESS){
                                if(rData.find){
                                    ary = ary.map(function(rot){
                                        var tmpA = rData.find(function(el){return !!(el.RouteUID==rot.RouteUID)});
                                        if(tmpA){//有相同的 RouteUID 則合併資料
                                            for(var k in tmpA){
                                                if(!rot[k]) rot[k] = tmpA[k];
                                            }
                                        }
                                        return rot;
                                    })
                                }
                            }
                            stRes = stRes.concat(ary);
                            goReadStation();
                        }})
                    }else{
                        goReadStation();
                    }
                }
            },
            selectField: ['Stops','StationUID','StationID','StationPosition']
        });
    
}

function getStops(){
    stRes = [];
    arySBS = ['TPE','NWT'];
    goReadStation();
}

export default {
    name: 'Stop',
    props: {
        msg: String,
        stationid: String
    },
    computed: {
        aryStops(){
            return this.$store.state.aryStop;
        }
    },
    methods: {
        updateStops (stops) {
            this.$store.dispatch('pushStops', stops)
        }
    },
    mounted: function(){
        vueMain = this;
        stationID = this.stationid;
        getStops(this.updateStops);
        window.a1 = this;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.stop_station_id{
    color: #75B;
}
.busArea{
    display: inline-block;
}
</style>
