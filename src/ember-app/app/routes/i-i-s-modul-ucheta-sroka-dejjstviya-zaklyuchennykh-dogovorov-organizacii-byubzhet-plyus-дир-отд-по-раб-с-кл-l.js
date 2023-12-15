import ListFormRoute from 'ember-flexberry/routes/list-form';
import { computed } from '@ember/object';
export default ListFormRoute.extend({
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'ДиректорL'
  */
  modelProjection: 'ДиректорL',

  /**
    Name of model to be used as list's records types.

    @property modelName
    @type String
    @default 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-organizacii-byubzhet-plyus-дир-отд-по-раб-с-кл'
  */
  modelName: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-organizacii-byubzhet-plyus-дир-отд-по-раб-с-кл',

  /**
    Defined user settings developer.
    For default userSetting use empty name ('').
    Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.

    ```javascript
    {
      <componentName>: {
        <settingName>: {
          colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
          sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
          colsWidths: [ <colName>:<colWidth>, ... ],
        },
        ...
      },
      ...
    }
    ```

    @property developerUserSettings
    @type Object
  */
  developerUserSettings: computed(function() {
    return { IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov_organizacii_ByubzhetPlyusДирОтдПоРабСКлL: {} }
  }),
});
