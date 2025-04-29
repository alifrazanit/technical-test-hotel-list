git pull origin main
npm install
npm run build:dev

sudo cp -r /home/linux_server/hotel-list-dev/technical-test-hotel-list/dist/technical-test-hotel-list/browser/* /var/www/app-dev.alifrazansaputra.id/
sudo chown -R www-data:www-data /var/www/
sudo chmod -R 755 /var/www/

sudo systemctl restart nginx