import { Button } from '@mui/material';
import React from 'react';
import './Menu.scss'

export default function Menu() {
    return <div className='Menu'>
        <div className='MainText'><h1>МЕНЮ</h1></div>
        <div className='MenuCategories'>
            <div className="Category">Супы</div>
            <div className="Category">Выпечка</div>
            <div className="Category">Салаты</div>
            <div className="Category">Гарниры</div>
            <div className="Category">Напитки</div>
        </div>
        <div className='MenuSlots'>
            <div className="FoodSlot">
                <div className="FoodPic">
                    <img alt='img' src='https://soupmanshop.com/wp-content/uploads/2021/04/2-paneer-momo-slider.png'></img>
                </div>
                <div className="FoodName">
                    <p>Название блюда</p>
                </div>
                <div className="FoodDescription">
                    <p>Описание блюда</p>
                </div>
                <div className="BuyCostSection">
                    <div className="Cost">
                    <p>50 ₽</p>
                    </div>
                    <Button color="warning" variant="contained" className='Buy'>В корзину</Button>
                </div>
            </div>

            <div className="FoodSlot">
                <div className="FoodPic">
                    <img alt='img' src='https://soupmanshop.com/wp-content/uploads/2021/04/2-paneer-momo-slider.png'></img>
                </div>
                <div className="FoodName">
                    <p>Название блюда</p>
                </div>
                <div className="FoodDescription">
                    <p>Описание блюда</p>
                </div>
                <div className="BuyCostSection">
                    <div className="Cost">
                    <p>50 ₽</p>
                    </div>
                    <Button color="warning" variant="contained" className='Buy'>В корзину</Button>
                </div>
            </div>

            <div className="FoodSlot">
                <div className="FoodPic">
                    <img alt='img' src='https://soupmanshop.com/wp-content/uploads/2021/04/2-paneer-momo-slider.png'></img>
                </div>
                <div className="FoodName">
                    <p>Название блюда</p>
                </div>
                <div className="FoodDescription">
                    <p>Описание блюда</p>
                </div>
                <div className="BuyCostSection">
                    <div className="Cost">
                    <p>50 ₽</p>
                    </div>
                    <Button color="warning" variant="contained" className='Buy'>В корзину</Button>
                </div>
            </div>

            <div className="FoodSlot">
                <div className="FoodPic">
                    <img alt='img' src='https://soupmanshop.com/wp-content/uploads/2021/04/2-paneer-momo-slider.png'></img>
                </div>
                <div className="FoodName">
                    <p>Название блюда</p>
                </div>
                <div className="FoodDescription">
                    <p>Описание блюда</p>
                </div>
                <div className="BuyCostSection">
                    <div className="Cost">
                    <p>50 ₽</p>
                    </div>
                    <Button color="warning" variant="contained" className='Buy'>В корзину</Button>
                </div>
            </div>

            <div className="FoodSlot">
                <div className="FoodPic">
                    <img alt='img' src='https://soupmanshop.com/wp-content/uploads/2021/04/2-paneer-momo-slider.png'></img>
                </div>
                <div className="FoodName">
                    <p>Название блюда</p>
                </div>
                <div className="FoodDescription">
                    <p>Описание блюда</p>
                </div>
                <div className="BuyCostSection">
                    <div className="Cost">
                    <p>50 ₽</p>
                    </div>
                    <Button color="warning" variant="contained" className='Buy'>В корзину</Button>
                </div>
            </div>

        </div>

    </div>
}
