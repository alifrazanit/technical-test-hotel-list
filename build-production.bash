git pull origin main
npm install
npm run build:prod

sudo cp -r /home/linux_server/hotel-list-production/technical-test-hotel-list/dist/technical-test-hotel-list/browser/* /var/www/alifrazansaputra.id/
sudo chown -R www-data:www-data /var/www/
sudo chmod -R 755 /var/www/

sudo systemctl restart nginx