<?php

namespace App\Http\Requests\Post;

use Illuminate\Foundation\Http\FormRequest;

class FilterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
          'title' => 'nullable',
          'content' => 'nullable',
          'preview_image' => 'nullable',          
          'category_id' => 'nullable|exists:categories,id',
          'tags' => 'nullable|array',
          'tags.*' => 'nullable|exists:tags,id',
        ];
    }
}
