# Generated by Django 3.2.5 on 2021-07-13 12:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu_items', '0002_auto_20210713_1528'),
    ]

    operations = [
        migrations.AlterField(
            model_name='categories',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='discount',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='menuitems',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='price',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
