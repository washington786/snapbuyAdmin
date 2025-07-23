import { useState } from 'react';
import { Row, Col, Button } from 'antd';
import type { Recipe } from '../utils/types';
import { RecipeCard } from '../components/recipes/RecipeCard';
import { recipeData } from '../utils/mockData';
import { RecipeModal } from '../components/recipes/RecipeModal';

export const RecipesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

    return (
        <div style={{ padding: '24px' }}>
            <Button
                type="primary"
                onClick={() => {
                    setSelectedRecipe(null);
                    setIsModalOpen(true);
                }}
                style={{ marginBottom: '16px' }}
            >
                Add Recipe
            </Button>

            <Row gutter={[16, 16]}>
                {recipeData.map(recipe => (
                    <Col key={recipe.id} xs={24} sm={12} md={8}>
                        <RecipeCard
                            recipe={recipe}
                            onClick={() => {
                                setSelectedRecipe(recipe);
                                setIsModalOpen(true);
                            }}
                        />
                    </Col>
                ))}
            </Row>

            <RecipeModal
                recipe={selectedRecipe}
                visible={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onSave={(updatedRecipe) => console.log('Saved:', updatedRecipe)}
            />
        </div>
    );
};