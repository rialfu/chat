<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    public function getUserList(){
        $data = User::orderBy('name','desc')->get();
        return response()->json(['data'=>$data],200);
    }
    public function editName(Request $request){
        $user=User::findOrFail($request->user()->id);
        $cek=Hash::check($request->passL,$user->password);
        if($cek==false){
            return response()->json(['data'=>$cek],200);
        }
        $user->name=$request->name;
        $user->save();
        return response()->json(['data'=>$cek],202);
    }
    public function editPass(Request $request){
        $user=User::findOrFail($request->user()->id);
        $cek=Hash::check($request->passL,$user->password);
        if($cek==false){
            return response()->json(['data'=>$cek],200);
        }
        $cek=$request->passB;
        $user->password=bcrypt($request->passB);
        $user->save();
        return response()->json(['data'=>$cek],202);
    }
    public function editMail(Request $request){
        $user=User::findOrFail($request->user()->id);
        $cek=Hash::check($request->passL,$user->password);
        if($cek==false){
            return response()->json(['data'=>$cek],200);
        }
        $user->email=$request->email;
        $user->save();
        return response()->json(['data'=>$cek],202);
    }

}
