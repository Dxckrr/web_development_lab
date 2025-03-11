use buenavidaparcial;
INSERT INTO users (names, surnames, email, password, role) VALUES
('Juan', 'Pérez', 'juan.perez@example.com', 'hashed_password_1', 'USER'),
('María', 'Gómez', 'maria.gomez@example.com', 'hashed_password_2', 'ADMIN'),
('Carlos', 'Rodríguez', 'carlos.rodriguez@example.com', 'hashed_password_3', 'USER');

-- Inserción de categorías
INSERT INTO categories (name, description) VALUES
('Suplementos', 'Suplementos nutricionales para mejorar la salud.'),
('Vitaminas', 'Vitaminas esenciales para fortalecer el sistema inmunológico.'),
('Cuidado Personal', 'Productos para el cuidado e higiene personal.'),
('Aparatos Médicos', 'Equipos y dispositivos médicos de uso doméstico.');

-- Inserción de productos
INSERT INTO products (name, price, description, category_id, stock, image_url) VALUES
('Proteína en Polvo', 120000.00, 'Suplemento de proteína en polvo de alta calidad.', 1, 50, 'https://example.com/proteina.jpg'),
('Multivitamínico Completo', 45000.00, 'Combinación de vitaminas y minerales esenciales.', 2, 100, 'https://example.com/multivitaminico.jpg'),
('Jabón Antibacterial', 12000.00, 'Jabón líquido con propiedades antibacterianas.', 3, 200, 'https://example.com/jabon.jpg'),
('Termómetro Digital', 30000.00, 'Termómetro de alta precisión con pantalla digital.', 4, 75, 'https://example.com/termometro.jpg'),
('Omega 3', 60000.00, 'Cápsulas de Omega 3 para la salud cardiovascular.', 2, 80, 'https://example.com/omega3.jpg'),
('Shampoo Anticaída', 35000.00, 'Shampoo especial para fortalecer el cabello y reducir la caída.', 3, 120, 'https://example.com/shampoo.jpg'),
('Glucómetro', 90000.00, 'Dispositivo para medir los niveles de glucosa en sangre.', 4, 30, 'https://example.com/glucometro.jpg');

INSERT INTO cart (id, user_id, created_at) VALUES 
(1, 3, NOW());

INSERT INTO cart_items (cart_id, product_id, quantity) VALUES 
(1, 5, 2),  
(1, 7, 1),  
(1, 2, 3); 

