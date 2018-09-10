<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
use App\User;
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix'=>'v1','middleware'=>'auth:api'],function(){
    Route::get('user-list',                          'UserController@getUserList');
    
    Route::post('get-user-conversation','ChatController@getUserConversationById' );
    Route::post('chat-save','ChatController@saveUserChat');

    Route::post('edit-mail'                         ,'UserController@editMail');
    Route::post('edit-name'                         ,'UserController@editName');
    Route::post('edit-pass'                         ,'UserController@editPass');

    Route::post('get-private-message-notifications' ,'PrivateMessageController@getUserNotifications');
    Route::post('get-private-messages'              ,'PrivateMessageController@getPrivateMessages');
    Route::post('get-private-message'               ,'PrivateMessageController@getPrivateMessageById');
    Route::post('get-private-messages-sent'         ,'PrivateMessageController@getPrivateMessageSent');
    Route::post('sent-private-message'              ,'PrivateMessageController@sendPrivateMessage');
    
    
});
Route::post('test','UserController@editName');
Route::get('lol', function () {
    $user= User::paginate(1);
    return response()->json(['data'=>$user],200);
});
// Route::get('test','PrivateMessageController@s');
