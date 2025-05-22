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
INSERT INTO products (id, name, stock, price, description, image_url, category_id) VALUES
(1, 'Aceite esencial de Clavo', 100, 7.99, 'El aceite esencial de clavo es conocido por sus propiedades antimicrobianas, antimicóticas, antisépticas, antivirales, afrodisíacas y estimulantes.', 'aceite_clavo.jpg', 3),
(2, 'Parches de Oro de 24 kt Rejuvenecedores para Contorno de Ojos', 100, 15.50, 'Parches para ojos con efecto rejuvenecedor enriquecidos con oro de 24kt.', 'parches_oro.jpg', 3),
(3, 'Parches Iluminadores para el Contorno de Ojos', 100, 15.50, 'Parches iluminadores para el contorno de ojos que hidratan la piel y mejoran su protección.', 'parches_iluminadores.jpg', 3),
(4, 'Parches Supertonificantes para Contorno de Ojos', 100, 15.50, 'Parches con efecto tonificante que reducen signos de fatiga y aportan vitalidad.', 'parches_supertonificantes.jpg', 3),
(5, '6 Discos Desmaquillantes de Fibra Natural', 100, 10.50, 'Discos de algodón y carbón de bambú para limpieza diaria y exfoliación.', 'discos_desmaquillantes.jpg', 3),
(6, 'Aceite anticelulítico de abedul', 100, 22.90, 'Aceite con extracto de hojas de abedul que mejora la circulación y combate la celulitis.', 'aceite_abedul.jpg', 3),
(7, 'Aceite antiinflamatorio S.O.S Rescate', 100, 12.45, 'Aceite para tratar pequeñas heridas, quemaduras, golpes y cicatrices.', 'aceite_sos.jpg', 3),
(8, 'Aceite Bucal de Coco Orgánico Premium', 100, 9.60, 'Aceite bucal con ingredientes naturales para higiene bucal y aliento fresco.', 'aceite_coco.jpg', 3),
(9, 'Aceite corporal blanco siberiano anticelulítico', 100, 6.95, 'Aceite con cera blanca de abeja y aceites naturales para hidratación.', 'aceite_blanco_siberiano.jpg', 3),
(10, 'Aceite corporal Body Sculptor', 100, 73.70, 'Aceite que moldea el cuerpo y ayuda a la tonificación de la piel.', 'aceite_body_sculptor.jpg', 3),
(11, 'Aceite corporal de almendras dulces', 100, 10.45, 'Aceite neutro para hidratación y nutrición de la piel, apto para todo tipo de piel.', 'aceite_almendras.jpg', 3),
(12, 'Aceite corporal de almendras dulces con dosificador 1L', 100, 14.99, 'Aceite neutro para hidratación y nutrición con práctico dosificador.', 'aceite_almendras_1l.jpg', 3),
(13, 'Aceite corporal de almendras dulces con dosificador 500ml', 100, 11.55, 'Aceite neutro para hidratación y nutrición en presentación de 500ml.', 'aceite_almendras_500ml.jpg', 3),
(14, 'Aceite Corporal de Granada', 100, 22.90, 'Aceite antioxidante intensivo para regeneración celular y mejora de elasticidad.', 'aceite_granada.jpg', 3),
(15, 'Aceite Corporal de Rosa Mosqueta', 100, 22.90, 'Aceite para regeneración de la piel y combate de signos de envejecimiento.', 'aceite_rosa_mosqueta.jpg', 3),
(16, 'Aceite corporal Embellecedor del Busto', 100, 81.70, 'Aceite para realzar y moldear el busto con hidratación profunda.', 'aceite_busto.jpg', 3),
(17, 'Aceite corporal Reafirmante de Tejidos', 100, 60.00, 'Aceite que previene la pérdida de firmeza y reafirma zonas con flacidez.', 'aceite_reafirmante.jpg', 3),
(18, 'Aceite corporal Reafirmante del Busto', 100, 81.70, 'Aceite para reafirmar el seno caído e hidratar la piel.', 'aceite_busto_reafirmante.jpg', 3),
(19, 'Aceite corporal Reina de Egipto', 100, 57.30, 'Aceite con fragancia exótica que nutre, regenera y combate el envejecimiento cutáneo.', 'aceite_reina_egipto.jpg', 3);

INSERT INTO cart (id, user_id, created_at) VALUES 
(1, 3, NOW());

INSERT INTO cart_items (cart_id, product_id, quantity) VALUES 
(1, 5, 2),  
(1, 7, 1),  
(1, 2, 3); 

