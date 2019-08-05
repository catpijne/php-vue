<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class TestDataController extends Controller
{
    public function getTestData(){
        $type = "BAR";
        $series = [[90,87,76,50,80,67]];
        $label = [1,2,3,4,5,6];
        return response()->json([
                "type"=> $type,
                "series"=> $series,
                "label"=>$label,
            ]);
    }
    public function GetDataFromMariaDB(){

        $type = \DB::table('testdata');
        $series = [[90,87,76,50,80,67]];
        $label = [1,2,3,4,5,6];

        return response()->json([
            "type"=> $type,
            "series"=> $series,
            "label"=>$label,
        ]);


    }
}
