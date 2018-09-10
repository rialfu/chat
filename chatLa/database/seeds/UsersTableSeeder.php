<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Chat;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Chat::create([
        //     'sender_id'=>1,
        //     'receiver_id'=>3,
        //     'chat'=>'Hello ma friend' ,
        //     'read'=>1
        // ]);
        User::create([
        //     'name'=>'alif',
        //     'email'=>'alif@test.com',
        //     'password'=>Hash::make('111111')
        //     // 'name'=>'riza',
        //     // 'email'=>'riza@test.com',
        //     // 'password'=>bcrypt('123456')
        //     // 'name'=>'riza',
        //     // 'email'=>'riza@test.com',
        //     // 'password'=>Hash::make('123456')
            // 'name'=>'Alfian',
            // 'email'=>'alfu@test.com',
            // 'password'=>bcrypt('123456')
        ]);

    }
}
