git pull origin main
npm install
npm run build:dev

sudo chown -R www-data:www-data /home/linux_server/hotel-list-development/technical-test-hotel-list/dist/
sudo chmod -R 775 /home/linux_server/hotel-list-development/technical-test-hotel-list/dist/
sudo systemctl restart nginx