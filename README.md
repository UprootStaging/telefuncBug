# telefunc bug


Steps to reproduce

```
./bundle.sh v0.0.0

mkdir ../production
cp bundle-v0.0.0.tbz2 ../production
cd ../production

tar xf ../minTeleBug/bundle-v0.0.0.tbz2
./deploy.sh
```

Click Test button in the UI
