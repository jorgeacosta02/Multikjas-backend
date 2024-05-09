import { Request, Response } from "express";
import { ArticleModel } from "../models/articleModel";


export const postArticleController = async (req:Request, res:Response) => {
    const {
        type,
        brand,
        model,
        year,
        condition,
        description,
        images,
        price,
      } = req.body;
    
      console.log(images)


    try{
        const newArticle = await ArticleModel.create({
            type,
            brand,
            model,
            year,
            condition,
            description,
            images,
            price,
            status:'active'
        });
        
        if(!newArticle){
            return res.status(400).json('Error creating the element');
        }

        res.status(201).json(newArticle)
    }catch(error){
        console.log(error);
        res.status(500).json("Server error");
    }
}