import { Card, Tag, List } from 'antd';
import { motion } from 'framer-motion';
import type { Recipe } from '../../utils/types';

interface RecipeCardProps {
    recipe: Recipe;
    onClick: () => void;
}

export const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        onClick={onClick}
        style={{ cursor: 'pointer' }}
    >
        <Card
            title={recipe.name}
            extra={< Tag color="blue" > {recipe.ingredients.length} ingredients </Tag>}
        >
            <List
                dataSource={recipe.ingredients.slice(0, 3)}
                renderItem={(item) => (
                    <List.Item>
                        {item.name} - <Tag>{item.quantity} </Tag>
                    </List.Item>
                )}
            />
        </Card>
    </motion.div>
);