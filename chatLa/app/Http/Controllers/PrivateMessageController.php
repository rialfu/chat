<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PrivateMessage;

class PrivateMessageController extends Controller
{
    public function getUserNotifications(Request $request)
    {
        $notifications = PrivateMessage::where('read',0)
            ->where('receiver_id',$request->user()->id)
            ->orderBy('created_at','desc')->get();
        
        return response()->json(['data'=>$notifications],200);
    }

    public function getPrivateMessages(Request $request)
    {
        $pms = PrivateMessage::where('receiver_id',$request->user()->id)
            ->orderBy('created_at','desc')->get();
        
        return response()->json(['data'=>$pms],200);
    }

    public function getPrivateMessageById(Request $request)
    {
        $user=$request->user()->id;
        // $pm = PrivateMessage::where('id',$request->id)->first();
        $pm = PrivateMessage::findOrFail($request->id);
        
        if($pm->sender_id != $user && $pm->receiver_id != $user){
            $pm=null;    
         }
        // if ($pm->read == 0){
        //     $pm->read = 1;
        //     $pm->save();
        // }

        return response()->json(['data'=>$pm],200);
    }
    
    public function getPrivateMessageSent(Request $request)
    {
        $pms = PrivateMessage::where('sender_id',$request->user()->id)
            ->orderBy('created_at','desc')->get();
        return response()->json(['data'=>$pms],200);
    }

    public function sendPrivateMessage(Request $request)
    {
        $pm   = PrivateMessage::create([
            'sender_id' =>$request->user()->id,
            'receiver_id'=>$request->receiver_id,
            'subject'   =>$request->subject,
            'message'   =>$request->message,
            'read'      =>0
        ]);
        $data = PrivateMessage::where('id', $pm->id)->first();
        return response()->json(['data'=>$data],201);

    }
    public function s(){
        $p= PrivateMessage::all('receiver_id',2)
        ->orderBy('created_at','desc')->get();
        return response()->json(['data'=>$p],200);  
    }
}
