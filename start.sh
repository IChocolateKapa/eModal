rm -rf dist
mkdir dist
cd dist
mkdir eModal

cd ../eModal
fis3 release -d ../dist/eModal
cd ../dist/eModal/css
rm -rf modal.css
rm -rf skin*.css


cd ../..
mkdir eModal-Re
cd ../eModal-Re
fis3 release -d ../dist/eModal-Re
cd ../dist/eModal-Re/css
rm -rf modal.css
rm -rf skin*.css
