<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $posts = Post::all();
        // return response()->json(['data' => $posts]);
        return PostResource::collection($posts->loadMissing(['author:id,username', 'comments']));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate(
            [
                'title' => 'required|max:255',
                'content' => 'required',
            ]);
        $request['author_id'] =  Auth::user()->id;
        $cover = '';
        if ($request->file) {

            $fileName = Str::random(30);
            $extension = $request->file->extension();
            $finalFileName = $fileName . '.' . $extension;
            Storage::putFileAs('public/images', $request->file, $finalFileName);
            $cover =  $finalFileName;
        }
        $request['cover'] = $cover;
        $post = Post::create($request->all());
        return new PostResource($post->loadMissing('author:id,username'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $posts
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $post = Post::with('author:id,username')->findOrFail($id);
        return new PostResource($post->loadMissing(['author:id,username', 'comments']));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $posts
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $posts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $posts
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate(
            [
                'title' => 'required|max:255',
                'content' => 'required',
            ]);

        $post = Post::findOrFail($id);
        $post->update($request->all());
        // print("request->all()"+request->all());
        return new PostResource($post->loadMissing('author:id,username'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $posts
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $posts, $id)
    {
        //
        $post = Post::findOrFail($id);
        $post->delete();

        return new PostResource($post->loadMissing('author:id,username'));
    }
}
